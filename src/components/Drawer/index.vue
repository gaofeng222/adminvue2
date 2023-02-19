<template>
  <div>
    <el-drawer
      title="项目配置"
      :visible.sync="drawerShow"
      :direction="direction"
      :before-close="handleClose"
      :size="350"
    >
      <el-divider>界面设置</el-divider>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="面包屑：">
          <el-switch
            v-model="form.switchValue"
            active-color="#13ce66"
            inactive-color="#ccc"
            @change="changeSwitch"
          >
          </el-switch>
        </el-form-item>
        <el-form-item label="系统名称：">
          <el-input v-model="form.sysName" class="w-4/5" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Drawer',
  props: {
    drawerShow: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'rtl'
    }
  },
  data() {
    return {
      form: {
        switchValue: true,
        sysName: ''
      }
    }
  },
  computed: {
    ...mapGetters(['systemName'])
  },
  created() {
    console.log(this.systemName, 'this.systemName')
    this.form.sysName = this.systemName
  },
  mounted() {},

  methods: {
    ...mapMutations('app', {
      changeBreadcrums: 'TOGGLE_BREADCRUME',
      changeSystemName: 'CHANGE_SYSTEMNAME'
    }),
    handleClose() {
      this.$emit('closDrawerHandle')
    },
    changeSwitch() {
      this.changeBreadcrums()
    },
    onSubmit() {
      this.changeSystemName(this.form.sysName)
    }
  }
}
</script>

<style lang="scss" scoped></style>
