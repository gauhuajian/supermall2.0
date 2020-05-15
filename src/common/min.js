// 防抖
export const itemListenerMixin = {
    data() {
        return {
            refresh: null
        }
    },
    mounted() {
        this.refresh = this.debounce(this.$refs.scroll.refresh, 300)
        //事件总线 监听 goods图片加载
        this.$bus.$on('goodsImageLoad', () => {
            this.refresh()

        });
    },
    methods: {
        debounce(fn, stop = 200) {
            const timer = null;
            return function () {
                if (timer) clearTimeout(timer);
                setTimeout(() => {
                    fn.call(this);
                }, stop);
            };
        },
    },
}
import backTop from '@/components/common/backtop/BackTop';

export const BackTop = {
    data() {
        return {
            showBackTop: false,
        }
    },
    components: {
        backTop,
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        backTop(position) {
            this.showBackTop = -position.y > 700;
        }
    }
}