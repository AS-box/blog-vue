<template>
  <div class="upload-image">
    <input type="file" @change="uploadImage" name="image" accept="image/*">
  </div>
</template>
<script>
export default {
  name:'UploadImage',
  data(){
    return{
      base64Image:null
    }
  },
  methods:{
    async uploadImage(e){
      this.base64Image = await this.createBase64(e.target.files[0])
      this.$emit('upload-image', this.base64Image)
    },
    createBase64(file){
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    }
  }
}
</script>