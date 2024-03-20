//此模块为决策中心中民主党派的相关apo
import axios from "axios";

export async function callDepartment(department) {
  // 1-2、学历分布(带参)
  let { data: res1 } = await axios.post(
    `http://localhost:9107/service/servicedecisioncenter/ShaoShuMinZu/queryDegree/${department}`
  );
  // 2-2、性别分布(带参)
  let { data: res2 } = await axios.post(
    `http://localhost:9107/service/servicedecisioncenter/ShaoShuMinZu/querySex/${department}`
  );
  // 4-2、民族分布(带参)
  let { data: res3 } = await axios.post(
    `http://localhost:9107/service/servicedecisioncenter/ShaoShuMinZu/queryNational/${department}`
  );
  // 4-0、教师民族分布,计算民族总数(主页)
  let { data: res4 } = await axios.post(
    `http://localhost:9107/service/servicedecisioncenter/ShaoShuMinZu/queryNationalTotal/${department}`
  );
  // 5-2、教师职称分布(有参)
  let { data: res5 } = await axios.post(
    `http://localhost:9107/service/servicedecisioncenter/ShaoShuMinZu/queryTitle/${department}`
  );
  // 6-0、学生民族分布,计算民族总数(主页)
  let { data: res6 } = await axios.post(
    `http://localhost:9107/service/servicedecisioncenter/ShaoShuMinZu/queryNationalTotalOfStudent/${department}`
  );
  // 6-2、民族分布(点击学院分)(学生)
  let { data: res7 } = await axios.post(
    `http://localhost:9107/service/servicedecisioncenter/ShaoShuMinZu/queryNationalOfStudent/${department}`
  );
  // 7-2、性别分布(点击学院分)(学生)
  let { data: res8 } = await axios.post(
    `http://localhost:9107/service/servicedecisioncenter/ShaoShuMinZu/querySexOfStudent/${department}`
  );
  // 8-2 学生 学院分布(有参)
  let { data: res9 } = await axios.post(
    `http://localhost:9107/service/servicedecisioncenter/ShaoShuMinZu/queryCountOfStudentByDepartment/${department}`
  );
  // 8-2 老师 学院分布(有参)
  let { data: res10 } = await axios.post(
    `http://localhost:9107/service/servicedecisioncenter/ShaoShuMinZu/queryCountOfTeacherByDepartment/${department}`
  );
  return { res1, res2, res3, res4, res5, res6, res7, res8, res9, res10 };
}
