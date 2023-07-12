<!--
 @Name 
 @Description 
 @author PerkinsZhu
 @date 2023/7/4 9:02 
-->
<script setup lang="ts">
import { Delete, Edit } from "@element-plus/icons-vue";
import { trademarkList, trademarkSaveOrUpdate } from "@/api/product/index.ts";
import { ElMessage, ElNotification, UploadProps } from "element-plus";
import { ref, computed } from "vue";

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

const form = ref({
  id: null,
  tmName: "",
  logoUrl: ""
});

let imageUrl = computed(() => {
  return form.value.logoUrl;
});

let dialogFormVisible = ref(false);

function addTrademark() {
  console.log(form.value);
  dialogFormVisible.value = true;
}

function edit(row) {
  dialogFormVisible.value = true;
  form.value = {
    id: row.id,
    tmName: row.tmName,
    logoUrl: row.logoUrl
  };
}

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  console.log(rawFile.type);
  if (rawFile.type !== "image/jpeg" && rawFile.type !== "image/png") {
    ElMessage.error("图片只能是 JPG 格式!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("图片大小不能超过 2MB!");
    return false;
  }
  return true;
};

const handleAvatarSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  form.value.logoUrl = response.data;
};

function close() {
  dialogFormVisible.value = false;
}

function submit() {
  trademarkSaveOrUpdate(form.value).then((res) => {
    if (res.code === 200) {
      ElNotification({
        type: "success",
        message: res.message
      });
      dialogFormVisible.value = false;
      form.value = {
        id: null,
        tmName: "",
        logoUrl: ""
      };
      loadList();
    } else {
      ElNotification({
        type: "error",
        message: res.message
      });
    }
  });
}
</script>

<template>
  <el-button type="success" @click="addTrademark">添加品牌</el-button>
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
      <template #="{ row, $index }">
        <el-button type="primary" :icon="Edit" circle @click="edit(row)" />
        <el-button type="danger" :icon="Delete" circle />
      </template>
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

  <el-dialog v-model="dialogFormVisible" title="新增品牌">
    <el-form :model="form">
      <el-form-item label="品牌名称" label-width="80px">
        <el-input v-model="form.tmName" autocomplete="off" style="width: 80%" />
      </el-form-item>
      <el-form-item label="品牌LOGO" label-width="80px">
        <el-upload
          class="avatar-uploader"
          action="/api/admin/product/fileUpload"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">关闭</el-button>
        <el-button type="primary" @click="submit">保存</el-button>
      </span>
    </template>
  </el-dialog>

</template>

<style scoped lang="scss">

</style>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>