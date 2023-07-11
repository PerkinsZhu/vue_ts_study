<!--
 @Name 
 @Description 
 @author PerkinsZhu
 @date 2023/7/4 9:02 
-->
<script setup lang="ts">
import { Delete, Edit } from "@element-plus/icons-vue";
import { trademarkList } from "@/api/product/index.ts";
import { ElNotification } from "element-plus";
import { ref } from "vue";

const tableData = ref([]);

let total = ref(1);

let limit = ref<number>(3);
let page = ref<number>(1);

function loadList() {
  trademarkList(page.value, limit.value).then((res) => {
    if (res.code === 200) {
      tableData.value = res.data.records;
      total.value = res.data.total;
    } else {
      ElNotification({
        type: "error",
        message: res.message
      });
    }
  });
}

loadList();

function currentChange(current: number) {
  page.value = current;
  loadList();
}

function limitChange(current: number) {
  limit.value = current;
  loadList();
}
</script>

<template>
  <el-button type="success">添加品牌</el-button>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" label="序号" width="100px" />
    <el-table-column prop="tmName" label="品牌名称" />
    <el-table-column prop="logoUrl" label="品牌LOGO">
      <template #="{ row, $index }">
        <img
          :src="row.logoUrl"
          alt="图片丢失了~"
          style="width: 100px; height: 80px"
        />
      </template>
    </el-table-column>
    <el-table-column prop="address" label="品牌操作">
      <el-row>
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="danger" :icon="Delete" circle />
      </el-row>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    :page-sizes="[3, 5, 7, 10]"
    layout="prev, pager, next, jumper, ->, sizes, total"
    v-model:page-size="limit"
    v-model:current-page="page"
    :total="total"
    @current-change="currentChange"
    @size-change="limitChange"
    next-text="下一页"
    prev-text="上一页"

  />
</template>

<style scoped lang="scss">

</style>