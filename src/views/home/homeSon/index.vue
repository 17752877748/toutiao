<template>
  <el-container class="homeSon">
    <!-- 头部 -->
    <el-header class="homeSon-head">
      <!-- 栅格布局 -->
      <el-row :gutter="5" class="head-row">
        <el-col :span="15" class="icon-head">
          <div>
            <img
              src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxOTg3MzgzMjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxOTg3Mzg0MjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE5ODczODEyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE5ODczODIyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAvAC4DAREAAhEBAxEB/8QAfgAAAgMBAAAAAAAAAAAAAAAABQcEBggBAQADAQEBAAAAAAAAAAAAAAABAgMEBQAQAAIBAwIEBQMCBgMAAAAAAAECAxEEBQASITETBkFRYSIHcTIUgVKx0UJyI1M1FggRAAICAQUBAQEAAAAAAAAAAAABEQIhMUESAwQicRP/2gAMAwEAAhEDEQA/ANTI24aSshYv/kn5cxvayGwx+y+zzkJHbcSqM3Lft5n0r9dProFVJnZ7dy3WIiyuVuxcZuZCTbQyRC1j3fanTT9g5+4nU28jukahzLXs9jjzPcM0626brpoEJIA+5wgqTTmQONNK3kCrgH2+QgvbSK8tJhPaTqHgnRqq6nkQRpwHBK+4jea08z5jXpAE+4ri6iwl69sem4jKrIOYLcKj1469bQNFLMrQ4u/yPycLUSBktpNzmYdRdq8aUPOpOqVa4FknzNEWmZyuNEf5ttBdWqCqzQRiORBTnsHA09NRaZf+VbaYZY7DI2V7As9vJuV+IYGvHS4I3o6uGLfuntbuPtLLydzdnRNeYS6fdnu2FqdhY+67sV8G8XjHPmNOnP6SCceWkZpG6cnVRAxi2nfxoabefLS8xuOJ2Ll3dkLexwNy8wBEi9NFPIlv5a932ioPPTlYy/n/AMrt/vSTI1uOmy1LWtDKy+NAwNSviNDov8QauyqVp2HNg83Ld9u/kyuzBaKJJF2udy7gWXwNOei2ynFTgXlt32LHuyOCxzvTV7mOHIW0sG2EiQ8KUPB6cmH66MYloNrJp7tbDTzN9czIGmnVUDf4YxKAOHAMWFRrRRJaHKs29SOsadNywU3fS9kyychuHBvWlaa86LlyPK748Qv8nr1MdYQ1oJLkbv7VG4/w1h9Wxr8mrE93dItqseR2+5CHjU8CWeQDgfoNJ05wbL4Rc+zs3j73AWyJKslxPcySSRDmBQBR+i60WewOL12O914bAW9qb+S1hDxEylyqgjaKkk+mhdgqRfi7OYjuXth8lZRvNLbXD2lxWL2qV96bF5cQ1a60UTShnN7odnBaPxrpX2GJepIpdYwCXoCPcR4eeqSSgnd9zLdvaWaihHUdmPgtKE65frvlG/yLViK+Vcr74MdEB0wu4+BIIoB9Aum8y3Ldz2J3xlddwxWSSxOhtFJBDxgileO1hQ11W7RsVup9KUPmVf5p+Unvh/1rFsQH/wCSuQeG3/UlP3f1Hy1TqpP0znd3ZHygl/5iz72mWy+DMrJFfwJdQIOI6sB2uAvmyNz9NVZlusD4UL+czANSlS9PGumnBLciZaK6mvrgzsEIQqu8qpKbqk8T9uuT60+R0fK1Ah++LK+nzskk5ijlZSNrzRIQFPs4M3IjV+iUh+15BTWXfKWMLYt5WxTFkuYYJYzFXnu3K3D146vWMyTdrpYmCgX2KuzfzF3gD1pRrq3r9eL60LQyNy5Lv8OJl8f8hYi4toYrushinhjmhkYQyKVkcKrsfYKGug9Qt4NVdOT8vmOpT7qrurXyroSRP//Z"
              alt
            />
          </div>
          <p>黑马头条官方账号</p>
          <p>视频发布</p>
        </el-col>
        <el-col :span="3">
          <p>222</p>
          <p>粉丝数</p>
        </el-col>
        <el-col :span="3">
          <p>333</p>
          <p>累计阅读量</p>
        </el-col>
        <el-col :span="3">
          <p>444</p>
          <p>累计评论量</p>
        </el-col>
      </el-row>
    </el-header>
    <!-- 主体内容 -->
    <el-main class="homeSon-main">
      <el-row :gutter="10">
        <!-- 左边卡片 -->
        <el-col :span="15">
          <!-- 卡片-最新图文 -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>最新图文</span>
              <el-button style="float: right; padding: 3px 0; color: #000;" type="text">更多</el-button>
            </div>
            <ul class="card-body">
              <li>
                <div>
                  <img
                    src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxOTg3MzgzMjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxOTg3Mzg0MjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE5ODczODEyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE5ODczODIyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAvAC4DAREAAhEBAxEB/8QAfgAAAgMBAAAAAAAAAAAAAAAABQcEBggBAQADAQEBAAAAAAAAAAAAAAABAgMEBQAQAAIBAwIEBQMCBgMAAAAAAAECAxEEBQASITETBkFRYSIHcTIUgVKx0UJyI1M1FggRAAICAQUBAQEAAAAAAAAAAAABEQIhMUESAwQicRP/2gAMAwEAAhEDEQA/ANTI24aSshYv/kn5cxvayGwx+y+zzkJHbcSqM3Lft5n0r9dProFVJnZ7dy3WIiyuVuxcZuZCTbQyRC1j3fanTT9g5+4nU28jukahzLXs9jjzPcM0626brpoEJIA+5wgqTTmQONNK3kCrgH2+QgvbSK8tJhPaTqHgnRqq6nkQRpwHBK+4jea08z5jXpAE+4ri6iwl69sem4jKrIOYLcKj1469bQNFLMrQ4u/yPycLUSBktpNzmYdRdq8aUPOpOqVa4FknzNEWmZyuNEf5ttBdWqCqzQRiORBTnsHA09NRaZf+VbaYZY7DI2V7As9vJuV+IYGvHS4I3o6uGLfuntbuPtLLydzdnRNeYS6fdnu2FqdhY+67sV8G8XjHPmNOnP6SCceWkZpG6cnVRAxi2nfxoabefLS8xuOJ2Ll3dkLexwNy8wBEi9NFPIlv5a932ioPPTlYy/n/AMrt/vSTI1uOmy1LWtDKy+NAwNSviNDov8QauyqVp2HNg83Ld9u/kyuzBaKJJF2udy7gWXwNOei2ynFTgXlt32LHuyOCxzvTV7mOHIW0sG2EiQ8KUPB6cmH66MYloNrJp7tbDTzN9czIGmnVUDf4YxKAOHAMWFRrRRJaHKs29SOsadNywU3fS9kyychuHBvWlaa86LlyPK748Qv8nr1MdYQ1oJLkbv7VG4/w1h9Wxr8mrE93dItqseR2+5CHjU8CWeQDgfoNJ05wbL4Rc+zs3j73AWyJKslxPcySSRDmBQBR+i60WewOL12O914bAW9qb+S1hDxEylyqgjaKkk+mhdgqRfi7OYjuXth8lZRvNLbXD2lxWL2qV96bF5cQ1a60UTShnN7odnBaPxrpX2GJepIpdYwCXoCPcR4eeqSSgnd9zLdvaWaihHUdmPgtKE65frvlG/yLViK+Vcr74MdEB0wu4+BIIoB9Aum8y3Ldz2J3xlddwxWSSxOhtFJBDxgileO1hQ11W7RsVup9KUPmVf5p+Unvh/1rFsQH/wCSuQeG3/UlP3f1Hy1TqpP0znd3ZHygl/5iz72mWy+DMrJFfwJdQIOI6sB2uAvmyNz9NVZlusD4UL+czANSlS9PGumnBLciZaK6mvrgzsEIQqu8qpKbqk8T9uuT60+R0fK1Ah++LK+nzskk5ijlZSNrzRIQFPs4M3IjV+iUh+15BTWXfKWMLYt5WxTFkuYYJYzFXnu3K3D146vWMyTdrpYmCgX2KuzfzF3gD1pRrq3r9eL60LQyNy5Lv8OJl8f8hYi4toYrushinhjmhkYQyKVkcKrsfYKGug9Qt4NVdOT8vmOpT7qrurXyroSRP//Z"
                    alt
                  />
                </div>
                <div class="news-txt">
                  <p>
                    <a href="javascript:;">个税法二审起征点仍为5000元，但有一个新变化</a>
                  </p>
                  <p>
                    <span>已发表</span> 2018-08-16 12:20:10
                  </p>
                  <p>推荐 6 阅读 29 评论 0 转发 0 收藏 6</p>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxOTg3MzgzMjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxOTg3Mzg0MjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE5ODczODEyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE5ODczODIyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAvAC4DAREAAhEBAxEB/8QAfgAAAgMBAAAAAAAAAAAAAAAABQcEBggBAQADAQEBAAAAAAAAAAAAAAABAgMEBQAQAAIBAwIEBQMCBgMAAAAAAAECAxEEBQASITETBkFRYSIHcTIUgVKx0UJyI1M1FggRAAICAQUBAQEAAAAAAAAAAAABEQIhMUESAwQicRP/2gAMAwEAAhEDEQA/ANTI24aSshYv/kn5cxvayGwx+y+zzkJHbcSqM3Lft5n0r9dProFVJnZ7dy3WIiyuVuxcZuZCTbQyRC1j3fanTT9g5+4nU28jukahzLXs9jjzPcM0626brpoEJIA+5wgqTTmQONNK3kCrgH2+QgvbSK8tJhPaTqHgnRqq6nkQRpwHBK+4jea08z5jXpAE+4ri6iwl69sem4jKrIOYLcKj1469bQNFLMrQ4u/yPycLUSBktpNzmYdRdq8aUPOpOqVa4FknzNEWmZyuNEf5ttBdWqCqzQRiORBTnsHA09NRaZf+VbaYZY7DI2V7As9vJuV+IYGvHS4I3o6uGLfuntbuPtLLydzdnRNeYS6fdnu2FqdhY+67sV8G8XjHPmNOnP6SCceWkZpG6cnVRAxi2nfxoabefLS8xuOJ2Ll3dkLexwNy8wBEi9NFPIlv5a932ioPPTlYy/n/AMrt/vSTI1uOmy1LWtDKy+NAwNSviNDov8QauyqVp2HNg83Ld9u/kyuzBaKJJF2udy7gWXwNOei2ynFTgXlt32LHuyOCxzvTV7mOHIW0sG2EiQ8KUPB6cmH66MYloNrJp7tbDTzN9czIGmnVUDf4YxKAOHAMWFRrRRJaHKs29SOsadNywU3fS9kyychuHBvWlaa86LlyPK748Qv8nr1MdYQ1oJLkbv7VG4/w1h9Wxr8mrE93dItqseR2+5CHjU8CWeQDgfoNJ05wbL4Rc+zs3j73AWyJKslxPcySSRDmBQBR+i60WewOL12O914bAW9qb+S1hDxEylyqgjaKkk+mhdgqRfi7OYjuXth8lZRvNLbXD2lxWL2qV96bF5cQ1a60UTShnN7odnBaPxrpX2GJepIpdYwCXoCPcR4eeqSSgnd9zLdvaWaihHUdmPgtKE65frvlG/yLViK+Vcr74MdEB0wu4+BIIoB9Aum8y3Ldz2J3xlddwxWSSxOhtFJBDxgileO1hQ11W7RsVup9KUPmVf5p+Unvh/1rFsQH/wCSuQeG3/UlP3f1Hy1TqpP0znd3ZHygl/5iz72mWy+DMrJFfwJdQIOI6sB2uAvmyNz9NVZlusD4UL+czANSlS9PGumnBLciZaK6mvrgzsEIQqu8qpKbqk8T9uuT60+R0fK1Ah++LK+nzskk5ijlZSNrzRIQFPs4M3IjV+iUh+15BTWXfKWMLYt5WxTFkuYYJYzFXnu3K3D146vWMyTdrpYmCgX2KuzfzF3gD1pRrq3r9eL60LQyNy5Lv8OJl8f8hYi4toYrushinhjmhkYQyKVkcKrsfYKGug9Qt4NVdOT8vmOpT7qrurXyroSRP//Z"
                    alt
                  />
                </div>
                <div class="news-txt">
                  <p>
                    <a href="javascript:;">个税法二审起征点仍为5000元，但有一个新变化</a>
                  </p>
                  <p>
                    <span>已发表</span> 2018-08-16 12:20:10
                  </p>
                  <p>推荐 6 阅读 29 评论 0 转发 0 收藏 6</p>
                </div>
              </li>
            </ul>
          </el-card>
          <!-- 卡片-动态 -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>动态</span>
              <el-button style="float: right; padding: 3px 0; color: #000;" type="text">更多</el-button>
            </div>
            <ul>
              <li class="icon-head">
                <div>
                  <img
                    src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxOTg3MzgzMjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxOTg3Mzg0MjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE5ODczODEyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE5ODczODIyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAvAC4DAREAAhEBAxEB/8QAfgAAAgMBAAAAAAAAAAAAAAAABQcEBggBAQADAQEBAAAAAAAAAAAAAAABAgMEBQAQAAIBAwIEBQMCBgMAAAAAAAECAxEEBQASITETBkFRYSIHcTIUgVKx0UJyI1M1FggRAAICAQUBAQEAAAAAAAAAAAABEQIhMUESAwQicRP/2gAMAwEAAhEDEQA/ANTI24aSshYv/kn5cxvayGwx+y+zzkJHbcSqM3Lft5n0r9dProFVJnZ7dy3WIiyuVuxcZuZCTbQyRC1j3fanTT9g5+4nU28jukahzLXs9jjzPcM0626brpoEJIA+5wgqTTmQONNK3kCrgH2+QgvbSK8tJhPaTqHgnRqq6nkQRpwHBK+4jea08z5jXpAE+4ri6iwl69sem4jKrIOYLcKj1469bQNFLMrQ4u/yPycLUSBktpNzmYdRdq8aUPOpOqVa4FknzNEWmZyuNEf5ttBdWqCqzQRiORBTnsHA09NRaZf+VbaYZY7DI2V7As9vJuV+IYGvHS4I3o6uGLfuntbuPtLLydzdnRNeYS6fdnu2FqdhY+67sV8G8XjHPmNOnP6SCceWkZpG6cnVRAxi2nfxoabefLS8xuOJ2Ll3dkLexwNy8wBEi9NFPIlv5a932ioPPTlYy/n/AMrt/vSTI1uOmy1LWtDKy+NAwNSviNDov8QauyqVp2HNg83Ld9u/kyuzBaKJJF2udy7gWXwNOei2ynFTgXlt32LHuyOCxzvTV7mOHIW0sG2EiQ8KUPB6cmH66MYloNrJp7tbDTzN9czIGmnVUDf4YxKAOHAMWFRrRRJaHKs29SOsadNywU3fS9kyychuHBvWlaa86LlyPK748Qv8nr1MdYQ1oJLkbv7VG4/w1h9Wxr8mrE93dItqseR2+5CHjU8CWeQDgfoNJ05wbL4Rc+zs3j73AWyJKslxPcySSRDmBQBR+i60WewOL12O914bAW9qb+S1hDxEylyqgjaKkk+mhdgqRfi7OYjuXth8lZRvNLbXD2lxWL2qV96bF5cQ1a60UTShnN7odnBaPxrpX2GJepIpdYwCXoCPcR4eeqSSgnd9zLdvaWaihHUdmPgtKE65frvlG/yLViK+Vcr74MdEB0wu4+BIIoB9Aum8y3Ldz2J3xlddwxWSSxOhtFJBDxgileO1hQ11W7RsVup9KUPmVf5p+Unvh/1rFsQH/wCSuQeG3/UlP3f1Hy1TqpP0znd3ZHygl/5iz72mWy+DMrJFfwJdQIOI6sB2uAvmyNz9NVZlusD4UL+czANSlS9PGumnBLciZaK6mvrgzsEIQqu8qpKbqk8T9uuT60+R0fK1Ah++LK+nzskk5ijlZSNrzRIQFPs4M3IjV+iUh+15BTWXfKWMLYt5WxTFkuYYJYzFXnu3K3D146vWMyTdrpYmCgX2KuzfzF3gD1pRrq3r9eL60LQyNy5Lv8OJl8f8hYi4toYrushinhjmhkYQyKVkcKrsfYKGug9Qt4NVdOT8vmOpT7qrurXyroSRP//Z"
                    alt
                  />
                </div>
                <p>
                  林动动 在
                  <span>xxx</span> 发布了评论
                </p>
                <p>三天前</p>
              </li>
              <li class="icon-head">
                <div>
                  <img
                    src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxOTg3MzgzMjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxOTg3Mzg0MjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE5ODczODEyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE5ODczODIyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAvAC4DAREAAhEBAxEB/8QAfgAAAgMBAAAAAAAAAAAAAAAABQcEBggBAQADAQEBAAAAAAAAAAAAAAABAgMEBQAQAAIBAwIEBQMCBgMAAAAAAAECAxEEBQASITETBkFRYSIHcTIUgVKx0UJyI1M1FggRAAICAQUBAQEAAAAAAAAAAAABEQIhMUESAwQicRP/2gAMAwEAAhEDEQA/ANTI24aSshYv/kn5cxvayGwx+y+zzkJHbcSqM3Lft5n0r9dProFVJnZ7dy3WIiyuVuxcZuZCTbQyRC1j3fanTT9g5+4nU28jukahzLXs9jjzPcM0626brpoEJIA+5wgqTTmQONNK3kCrgH2+QgvbSK8tJhPaTqHgnRqq6nkQRpwHBK+4jea08z5jXpAE+4ri6iwl69sem4jKrIOYLcKj1469bQNFLMrQ4u/yPycLUSBktpNzmYdRdq8aUPOpOqVa4FknzNEWmZyuNEf5ttBdWqCqzQRiORBTnsHA09NRaZf+VbaYZY7DI2V7As9vJuV+IYGvHS4I3o6uGLfuntbuPtLLydzdnRNeYS6fdnu2FqdhY+67sV8G8XjHPmNOnP6SCceWkZpG6cnVRAxi2nfxoabefLS8xuOJ2Ll3dkLexwNy8wBEi9NFPIlv5a932ioPPTlYy/n/AMrt/vSTI1uOmy1LWtDKy+NAwNSviNDov8QauyqVp2HNg83Ld9u/kyuzBaKJJF2udy7gWXwNOei2ynFTgXlt32LHuyOCxzvTV7mOHIW0sG2EiQ8KUPB6cmH66MYloNrJp7tbDTzN9czIGmnVUDf4YxKAOHAMWFRrRRJaHKs29SOsadNywU3fS9kyychuHBvWlaa86LlyPK748Qv8nr1MdYQ1oJLkbv7VG4/w1h9Wxr8mrE93dItqseR2+5CHjU8CWeQDgfoNJ05wbL4Rc+zs3j73AWyJKslxPcySSRDmBQBR+i60WewOL12O914bAW9qb+S1hDxEylyqgjaKkk+mhdgqRfi7OYjuXth8lZRvNLbXD2lxWL2qV96bF5cQ1a60UTShnN7odnBaPxrpX2GJepIpdYwCXoCPcR4eeqSSgnd9zLdvaWaihHUdmPgtKE65frvlG/yLViK+Vcr74MdEB0wu4+BIIoB9Aum8y3Ldz2J3xlddwxWSSxOhtFJBDxgileO1hQ11W7RsVup9KUPmVf5p+Unvh/1rFsQH/wCSuQeG3/UlP3f1Hy1TqpP0znd3ZHygl/5iz72mWy+DMrJFfwJdQIOI6sB2uAvmyNz9NVZlusD4UL+czANSlS9PGumnBLciZaK6mvrgzsEIQqu8qpKbqk8T9uuT60+R0fK1Ah++LK+nzskk5ijlZSNrzRIQFPs4M3IjV+iUh+15BTWXfKWMLYt5WxTFkuYYJYzFXnu3K3D146vWMyTdrpYmCgX2KuzfzF3gD1pRrq3r9eL60LQyNy5Lv8OJl8f8hYi4toYrushinhjmhkYQyKVkcKrsfYKGug9Qt4NVdOT8vmOpT7qrurXyroSRP//Z"
                    alt
                  />
                </div>
                <p>
                  林动动 收藏了
                  <span>项目管理感悟(五)</span>
                </p>
                <p>三天前</p>
              </li>
              <li class="icon-head">
                <div>
                  <img
                    src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxOTg3MzgzMjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxOTg3Mzg0MjY5RDExRTlBNEYxOTM5QjQzNzVEMEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE5ODczODEyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE5ODczODIyNjlEMTFFOUE0RjE5MzlCNDM3NUQwQUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAvAC4DAREAAhEBAxEB/8QAfgAAAgMBAAAAAAAAAAAAAAAABQcEBggBAQADAQEBAAAAAAAAAAAAAAABAgMEBQAQAAIBAwIEBQMCBgMAAAAAAAECAxEEBQASITETBkFRYSIHcTIUgVKx0UJyI1M1FggRAAICAQUBAQEAAAAAAAAAAAABEQIhMUESAwQicRP/2gAMAwEAAhEDEQA/ANTI24aSshYv/kn5cxvayGwx+y+zzkJHbcSqM3Lft5n0r9dProFVJnZ7dy3WIiyuVuxcZuZCTbQyRC1j3fanTT9g5+4nU28jukahzLXs9jjzPcM0626brpoEJIA+5wgqTTmQONNK3kCrgH2+QgvbSK8tJhPaTqHgnRqq6nkQRpwHBK+4jea08z5jXpAE+4ri6iwl69sem4jKrIOYLcKj1469bQNFLMrQ4u/yPycLUSBktpNzmYdRdq8aUPOpOqVa4FknzNEWmZyuNEf5ttBdWqCqzQRiORBTnsHA09NRaZf+VbaYZY7DI2V7As9vJuV+IYGvHS4I3o6uGLfuntbuPtLLydzdnRNeYS6fdnu2FqdhY+67sV8G8XjHPmNOnP6SCceWkZpG6cnVRAxi2nfxoabefLS8xuOJ2Ll3dkLexwNy8wBEi9NFPIlv5a932ioPPTlYy/n/AMrt/vSTI1uOmy1LWtDKy+NAwNSviNDov8QauyqVp2HNg83Ld9u/kyuzBaKJJF2udy7gWXwNOei2ynFTgXlt32LHuyOCxzvTV7mOHIW0sG2EiQ8KUPB6cmH66MYloNrJp7tbDTzN9czIGmnVUDf4YxKAOHAMWFRrRRJaHKs29SOsadNywU3fS9kyychuHBvWlaa86LlyPK748Qv8nr1MdYQ1oJLkbv7VG4/w1h9Wxr8mrE93dItqseR2+5CHjU8CWeQDgfoNJ05wbL4Rc+zs3j73AWyJKslxPcySSRDmBQBR+i60WewOL12O914bAW9qb+S1hDxEylyqgjaKkk+mhdgqRfi7OYjuXth8lZRvNLbXD2lxWL2qV96bF5cQ1a60UTShnN7odnBaPxrpX2GJepIpdYwCXoCPcR4eeqSSgnd9zLdvaWaihHUdmPgtKE65frvlG/yLViK+Vcr74MdEB0wu4+BIIoB9Aum8y3Ldz2J3xlddwxWSSxOhtFJBDxgileO1hQ11W7RsVup9KUPmVf5p+Unvh/1rFsQH/wCSuQeG3/UlP3f1Hy1TqpP0znd3ZHygl/5iz72mWy+DMrJFfwJdQIOI6sB2uAvmyNz9NVZlusD4UL+czANSlS9PGumnBLciZaK6mvrgzsEIQqu8qpKbqk8T9uuT60+R0fK1Ah++LK+nzskk5ijlZSNrzRIQFPs4M3IjV+iUh+15BTWXfKWMLYt5WxTFkuYYJYzFXnu3K3D146vWMyTdrpYmCgX2KuzfzF3gD1pRrq3r9eL60LQyNy5Lv8OJl8f8hYi4toYrushinhjmhkYQyKVkcKrsfYKGug9Qt4NVdOT8vmOpT7qrurXyroSRP//Z"
                    alt
                  />
                </div>
                <p>
                  林动动 在
                  <span>xxx</span> 发布了评论
                </p>
                <p>三天前</p>
              </li>
            </ul>
          </el-card>
        </el-col>
        <!-- 右边卡片 -->
        <el-col :span="9">
          <!-- 卡片-粉丝数据 -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>粉丝数据</span>
            </div>
            <div ref="container" style="width: 100%; height: 230px;"></div>
            <el-row class="card-bottom-col">
              <el-col :span="8">
                <p>22</p>
                <span>新增粉丝</span>
              </el-col>
              <el-col :span="8">
                <p>283</p>
                <span>活跃粉丝</span>
              </el-col>
              <el-col :span="8">
                <p>123</p>
                <span>总粉丝数</span>
              </el-col>
            </el-row>
          </el-card>
          <!-- 卡片-图文数据 -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>图文数据</span>
            </div>
            <div ref="container1" style="width: 100%; height: 230px;"></div>
            <el-row class="card-bottom-col">
              <el-col :span="8">
                <p>23</p>
                <span>平均阅读进度</span>
              </el-col>
              <el-col :span="8">
                <p>283</p>
                <span>平均阅读速度</span>
              </el-col>
              <el-col :span="8">
                <p>123</p>
                <span>跳出率</span>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
// 导入echarts
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    // 实例化echarts传入容器
    var myChart = echarts.init(this.$refs.container);
    var myChart1 = echarts.init(this.$refs.container1);
    // 配置数据
    var option = {
      tooltip: {
        trigger: "axis"
      },
      radar: [
        {
          indicator: [
            { text: "引用", max: 100 },
            { text: "产量", max: 100 },
            { text: "贡献", max: 100 },
            { text: "热度", max: 100 },
            { text: "口碑", max: 100 }
          ],
          radius: 80,
          center: ["50%", "60%"]
        }
      ],
      series: [
        {
          type: "radar",
          tooltip: {
            trigger: "item"
          },
          data: [
            {
              value: [20, 40, 60, 80, 45]
            },
            {
              value: [31, 73, 85, 40, 66]
            },
            {
              value: [56, 22, 41, 38, 93]
            }
          ]
        }
      ]
    };
    var option1 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      series: [
        {
          name: "图文数据",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 234, name: "平均阅读速度" },
            { value: 335, name: "平均阅读进度" },
            { value: 310, name: "跳出率" }
          ]
        }
      ]
    };

    // 应用配置
    myChart.setOption(option);
    myChart1.setOption(option1);
  }
};
</script>

<style lang="less" scoped>
.homeSon {
  width: 100%;
  // 头
  .homeSon-head {
    height: 66px;
    padding: 0;
    background-color: #fff;
    // 栅格行
    .head-row {
      width: 100%;
      height: 100%;
      // 栅格
      .el-col {
        height: 100%;
        text-align: center;
        border-right: 1px solid #eee;
        padding-top: 12px;
        &:first-child {
          padding: 8px;
        }
        &:first-child {
          border: none;
        }
        &:last-child {
          border: none;
        }
        p {
          &:last-child {
            font-size: 12px;
            color: #999;
          }
        }
      }
      // 头像部分
      .icon-head {
        padding-left: 0;
        padding-right: 0;
        padding: 8px;
        text-align: left;
        div {
          width: 50px;
          height: 50px;
          float: left;
          margin-right: 10px;
          img {
            border-radius: 50%;
          }
        }
        p {
          &:nth-child(2) {
            font-size: 14px;
            margin: 4px 0;
          }
        }
      }
    }
  }
  // 主体
  .homeSon-main {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0;
    // 卡片头部padding(公共部分)
    /deep/.el-card__header {
      font-size: 14px;
      padding: 10px;
      background-color: #fbfbfb;
    }
    // 卡片主体
    /deep/.el-card__body {
      padding: 10px;
      // 最新图文
      ul.card-body {
        li {
          display: flex;
          padding: 10px;
          border-bottom: 1px solid #eee;
          &:last-child {
            border: none;
          }
          // 文字盒子
          .news-txt {
            font-size: 14px;
            margin: 5px;
            margin-left: 10px;
            p {
              &:nth-child(2) {
                margin: 10px 0;
                color: #999;
                span {
                  color: skyblue;
                }
              }
              &:last-child {
                color: #999;
                font-size: 12px;
              }
            }
          }
          img {
            width: 150px;
            height: 85px;
          }
        }
      }
      // 动态
      ul {
        // 头像部分
        .icon-head {
          padding-left: 0;
          padding-right: 0;
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #eee;
          &:last-child {
            border: none;
          }
          div {
            width: 50px;
            height: 50px;
            float: left;
            margin-right: 10px;
            img {
              border-radius: 50%;
            }
          }
          p {
            font-size: 14px;
            &:nth-child(2) {
              margin: 4px 0;
              span {
                color: #3296fa;
              }
            }
            &:last-child {
              color: #999;
            }
          }
        }
      }
    }
    // 卡片
    .box-card {
      margin-top: 10px;
      .card-bottom-col {
        border: 1px solid #eee;
        .el-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px;
          border-right: 1px solid #eee;
          &:last-child {
            border: none;
          }
          span {
            position: relative;
            color: #afafaf;
            font-size: 12px;
            &::before {
              content: "";
              position: absolute;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              left: -16px;
              top: 4px;
            }
          }
          &:nth-child(1) span::before {
            background-color: #00f;
          }
          &:nth-child(2) span::before {
            background-color: #0f0;
          }
          &:nth-child(3) span::before {
            background-color: #f00;
          }
        }
      }
    }
  }
}
</style>