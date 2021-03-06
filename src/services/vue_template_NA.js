/**
 * Created by mac WuYiPing on 17/6/8.
 */


/*现在只写到三级目录 以及导航*/
export default const template = [
    function (name) {
        return `
        <template>
    <div class="content">

          <nav class="nav">
            <ul>
                <li class="closed"><router-link to="/home">
                  <i class="side-bar-icon">&#xe607;</i>
                  首页
                </router-link></li>
                <li class="closed"><router-link to="/warning">
                  <i class="side-bar-icon">&#xe609;</i>
                  预警
                </route r-link></li>
                <li class="closed"><router-link to="/assets">
                  <i class="side-bar-icon">&#xe66a;</i>
                  资产
                </router-link></li>
                <li class="closed"><router-link to="/strategy">
                  <i class="side-bar-icon">&#xe662;</i>
                  策略
                </router-link></li>
                <li class="closed"><router-link to="/config">
                  <i class="side-bar-icon">&#xe606;</i>
                  设置
                </router-link></li>

              <!--</template>-->
            </ul>
          </nav>

        </div>


    </div>

<router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                //todo 这里是data区域
              activeIndex:'1',
              activeIndex2:'2'
            }
        },
        components: {
            //TODO 添加子组件
        },
        computed: {
            //TODO 计算区
        },
        methods: {
            //TODO 方法区
        },
        mounted: function () {

            //TODO 函数执行区域
        }
    }
</script>
<style lang="scss">
  .contend {
    width:100%;
    height: 100%;
    background: #4caf50;
    .nav{
      width: 100px;
      height:100%;
      background: #00AAFF;
      position: absolute;
      left: 0;
      top:0;
    }
  }
</style>
        
        
        `
    },

    function () {

    },


    function () {

    },
]
