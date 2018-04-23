<template>
  <div class="dashboard-footer">
    <div class="footer-album">
      <span class="icon-file-picture"></span>
      <!-- <div class="choose-album">{{ curAlbumName || '选择相册' }}</div> -->
      <select class="choose-album" v-model="curAlbumId" @change="select">
        <option value ="" selected>选择相册</option>
        <option
          v-for="album of albums"
          :key="album.id"
          :value="album.id"
        >{{ album.name }}</option>
      </select>
    </div>
    <div>
      <span class="add-photo-btn">添加照片<input type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"/>
      </span>
      <button class="upload-btn" @click="uploadPhotos">开始上传</button>
    </div>
  </div>
</template>

<script>
function getAlbums () {
  return [
    {
      id: '1',
      name: 'test'
    },
    {
      id: '2',
      name: 'aaa'
    },
    {
      id: '3',
      name: 'cid'
    }
  ]
}

export default {
  data () {
    return {
      curAlbumId: '',
      albums: []
    }
  },
  created () {
    // 模拟数据
    this.albums = getAlbums()
  },
  methods: {
    uploadPhotos () {
      this.$emit('upload')
    },
    select () {
      this.$emit('select-album', this.curAlbumId)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  padding-left: $globalPadding;
  padding-right: $globalPadding;
  height: 2.6rem;
  box-sizing: border-box;
  font-size: .65rem;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #d2d2d2;
  .upload-btn, .add-photo-btn {
    font-size: .6rem;
    border-radius: 2px;
    border: none;
    color: #fff;
    padding: .3rem .6rem;
    background-color: #3dbbd7;
    box-shadow: 1px 1px 12px rgba(27,31,35,.3);
    cursor: pointer;
    transition: opacity .3s;
    &:hover {
      opacity: .8;
    }
  }
  .add-photo-btn {
    position: relative;
    margin-right: 1rem;
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .footer-album {
    display: flex;
    position: relative;
    align-items: center;
    span {
      font-size: 1.1rem;
    }
    .choose-album {
      position: relative;
      outline: none;
      border: none;
      appearance: none;
      width: 10rem;
      padding-bottom: .3rem;
      margin-left: 1rem;
      border-bottom: 1px solid #e3e3e3;
      cursor: pointer;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      border-left: 7px solid #9b9b9b;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      transform: rotate(45deg);
    }
  }
}
</style>
