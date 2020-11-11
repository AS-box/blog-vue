<template>
  <div class="upload-image">
    <input type="file" name="image" accept="image/*">
  </div>
</template>
<script>
export default {
  name:'UploadImage',
  data(){
    return{
      imageName:'',
      uploadImage:''
    }
  },
  methods:{
    
  }
}
</script>