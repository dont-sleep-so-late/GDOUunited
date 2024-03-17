<template>
  <!-- 使用Element UI的el-card组件创建卡片容器 -->
  <el-card class="form-container" shadow="never">
    <!-- 遍历资源分类 -->
    <div class="table-" v-for="(cate,index) in allResourceCate" :class="index===0?'top-line':null" :key="'cate'+cate.id">
      <!-- 创建资源分类的全选复选框 -->
      <el-row class="table-layout" style="background: #F2F6FC;">
        <el-checkbox v-model="cate.checked" :indeterminate="isIndeterminate(cate.id)" @change="handleCheckAllChange(cate)">
          {{cate.name}}
        </el-checkbox>
      </el-row>
      <!-- 遍历资源并创建复选框 -->
      <el-row class="table-layout">
        <el-col :span="8" v-for="resource in getResourceByCate(cate.id)" :key="resource.id" style="padding: 4px 0">
          <el-checkbox v-model="resource.checked" @change="handleCheckChange(resource)">
            {{resource.name}}
          </el-checkbox>
        </el-col>
      </el-row>
    </div>
    <!-- 操作按钮区域 -->
    <div style="margin-top: 20px" align="center">
      <el-button type="primary" @click="handleSave()">保存</el-button>
      <el-button @click="handleClear()">清空</el-button>
    </div>
  </el-card>
</template>

<script>
import { fetchAllResourceList } from '@/api/resource';
import { listAllCate } from '@/api/resourceCategory';
import { allocResource, listResourceByRole } from '@/api/role';

export default {
  name: "allocResource",
  data () {
    return {
      roleId: null,
      allResource: null,
      allResourceCate: null
    };
  },
  created () {
    // 从路由中获取角色ID
    this.roleId = this.$route.query.roleId;
    // 获取所有资源分类
    this.getAllResourceCateList();
  },
  methods: {
    // 获取所有资源列表
    getAllResourceList () {
      fetchAllResourceList().then(response => {
        this.allResource = response.data;
        // 初始化资源的选中状态
        for (let i = 0; i < this.allResource.length; i++) {
          this.allResource[i].checked = false;
        }
        // 获取角色已分配的资源
        this.getResourceByRole(this.roleId);
      });
    },
    // 获取所有资源分类列表
    getAllResourceCateList () {
      listAllCate().then(response => {
        this.allResourceCate = response.data;
        // 初始化资源分类的选中状态
        for (let i = 0; i < this.allResourceCate.length; i++) {
          this.allResourceCate[i].checked = false;
        }
        // 获取所有资源列表
        this.getAllResourceList();
      });
    },
    // 根据资源分类ID过滤资源数据
    getResourceByCate (categoryId) {
      let cateResource = [];
      if (this.allResource == null) return null;
      for (let i = 0; i < this.allResource.length; i++) {
        let resource = this.allResource[i];
        if (resource.categoryId === categoryId) {
          cateResource.push(resource);
        }
      }
      return cateResource;
    },
    // 获取角色已分配的资源
    getResourceByRole (roleId) {
      listResourceByRole(roleId).then(response => {
        let allocResource = response.data;
        this.allResource.forEach(item => {
          item.checked = this.getResourceChecked(item.id, allocResource);
        });
        this.allResourceCate.forEach(item => {
          item.checked = this.isAllChecked(item.id);
        });
        this.$forceUpdate();
      });
    },
    // 检查资源是否已选中
    getResourceChecked (resourceId, allocResource) {
      if (allocResource == null || allocResource.length === 0) return false;
      for (let i = 0; i < allocResource.length; i++) {
        if (allocResource[i].id === resourceId) {
          return true;
        }
      }
      return false;
    },
    // 判断资源分类的选中状态是否不确定
    isIndeterminate (categoryId) {
      let cateResources = this.getResourceByCate(categoryId);
      if (cateResources == null) return false;
      let checkedCount = 0;
      for (let i = 0; i < cateResources.length; i++) {
        if (cateResources[i].checked === true) {
          checkedCount++;
        }
      }
      return !(checkedCount === 0 || checkedCount === cateResources.length);
    },
    // 判断资源分类的选中状态是否全部选中
    isAllChecked (categoryId) {
      let cateResources = this.getResourceByCate(categoryId);
      if (cateResources == null) return false;
      let checkedCount = 0;
      for (let i = 0; i < cateResources.length; i++) {
        if (cateResources[i].checked === true) {
          checkedCount++;
        }
      }
      if (checkedCount === 0) {
        return false;
      }
      return checkedCount === cateResources.length;
    },
    // 保存资源分配
    handleSave () {
      this.$confirm('是否分配资源？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let checkedResourceIds = new Set();
        if (this.allResource != null && this.allResource.length > 0) {
          this.allResource.forEach(item => {
            if (item.checked) {
              checkedResourceIds.add(item.id);
            }
          });
        }
        let params = new URLSearchParams();
        params.append("roleId", this.roleId);
        params.append("resourceIds", Array.from(checkedResourceIds));
        // 调用后端API进行资源分配
        allocResource(params).then(response => {
          this.$message({
            message: '分配成功',
            type: 'success',
            duration: 1000
          });
          // 返回上一页
          this.$router.back();
        })
      })
    },
    // 清空所有选择
    handleClear () {
      this.allResourceCate.forEach(item => {
        item.checked = false;
      });
      this.allResource.forEach(item => {
        item.checked = false;
      });
      this.$forceUpdate();
    },
    // 处理资源分类全选状态变化
    handleCheckAllChange (cate) {
      let cateResources = this.getResourceByCate(cate.id);
      for (let i = 0; i < cateResources.length; i++) {
        cateResources[i].checked = cate.checked;
      }
      this.$forceUpdate();
    },
    // 处理资源复选框状态变化
    handleCheckChange (resource) {
      this.allResourceCate.forEach(item => {
        if (item.id === resource.categoryId) {
          item.checked = this.isAllChecked(resource.categoryId);
        }
      });
      this.$forceUpdate();
    }
  }
}
</script>

<style scoped>
.table-layout {
  padding: 20px;
  border-left: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
}

.top-line {
  border-top: 1px solid #dcdfe6;
}
/* .table- {
  display: block;
  margin: 60px;
}
.form-container {
  height: 700px;
  display: block;
} */
</style>
