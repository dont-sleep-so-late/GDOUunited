<template>
  <el-card class="form-container" shadow="never">
    <el-tree :data="menuTreeList" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current
      :props="defaultProps">
    </el-tree>
    <div style="margin-top: 20px" align="center">
      <el-button type="primary" @click="handleSave()">保存</el-button>
      <el-button @click="handleClear()">清空</el-button>
    </div>

  </el-card>
</template>

<script>
import { fetchTreeList } from '@/api/menu';
import { listMenuByRole, allocMenu } from '@/api/role';

export default {
  name: "allocMenu",
  data() {
    return {
      menuTreeList: [],
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      roleId: null
    };
  },
  created() {
    this.roleId = this.$route.query.roleId;
    this.treeList();
    this.getRoleMenu(this.roleId);
  },
  methods: {
    treeList() {
      fetchTreeList().then(response => {
        this.menuTreeList = response.data;
      });
    },
    getRoleMenu(roleId) {
      listMenuByRole(roleId).then(response => {
        let menuList = response.data;
        let checkedMenuIds = [];
        if (menuList != null && menuList.length > 0) {
          for (let i = 0; i < menuList.length; i++) {
            let menu = menuList[i];
            // 将所有菜单ID添加到checkedMenuIds中，包括一级菜单
            checkedMenuIds.push(menu.id);
            // 如果存在父ID，也将其添加到checkedMenuIds中
            if (menu.parentId !== 0) {
              checkedMenuIds.push(menu.parentId);
            }
          }
        }
        // 使用Set来去除重复的ID
        let uniqueCheckedMenuIds = new Set(checkedMenuIds);
        this.$refs.tree.setCheckedKeys(Array.from(uniqueCheckedMenuIds));
      });
    },
    handleSave() {
      let checkedNodes = this.$refs.tree.getCheckedNodes();
      let checkedMenuIds = new Set();
      if (checkedNodes != null && checkedNodes.length > 0) {
        for (let i = 0; i < checkedNodes.length; i++) {
          let checkedNode = checkedNodes[i];
          checkedMenuIds.add(checkedNode.id);
          if (checkedNode.parentId !== 0) {
            checkedMenuIds.add(checkedNode.parentId);
          }
        }
      }
      this.$confirm('是否分配菜单？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let params = new URLSearchParams();
        params.append("roleId", this.roleId);
        params.append("menuIds", Array.from(checkedMenuIds));
        allocMenu(params).then(response => {
          this.$message({
            message: '分配成功',
            type: 'success',
            duration: 1000
          });
          this.$router.back();
        })
      })
    },
    handleClear() {
      this.$refs.tree.setCheckedKeys([]);
    }
  }
}
</script>

<style scoped></style>
