<template>
  <div class="editor">
    <TinymceEditor
      v-model="myValue"
      :init="completeSetting"
      :disabled="disabled"
    />
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import TinymceEditor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver/theme'
// import 'tinymce/icons/default/icons'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/image'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/media'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/table'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/code'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/contextmenu'

export default {
  name: 'TinymceEditor',
  components: {
    TinymceEditor
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    setting: {
      type: Object,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultSetting: {
        min_height: 300,
        max_height: 600,
        // language_url: 'tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        // skin_url: 'tinymce/skins/ui/oxide',
        selector: 'textarea',
        plugins:
          'autolink autoresize contextmenu fullscreen hr image imagetools insertdatetime link lists media preview table textcolor wordcount code searchreplace',
        toolbar:
          'undo redo | formatselect | bold italic strikethrough forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | hr link image media table insertdatetime preview ',
        branding: false,
        menubar: false,
        toolbar_mode: 'sliding',
        insertdatetime_formats: [
          '%Y年%m月%d日',
          '%H点%M分%S秒',
          '%Y-%m-%d',
          '%H:%M:%S'
        ],
        images_upload_handler: (blobInfo, success) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        }
      },
      myValue: this.value
    }
  },
  computed: {
    completeSetting() {
      return Object.assign(this.defaultSetting, this.setting)
    }
  },
  watch: {
    myValue(newValue) {
      this.$emit('input', newValue)
    },
    value(newValue) {
      this.myValue = newValue
    }
  },
  mounted() {
    tinymce.init({})
  }
}
</script>

<style lang="less" scoped>
::v-deep .tox-tinymce {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
</style>
