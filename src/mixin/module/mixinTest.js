export const myMixin = {
    data() {
        return {
            num: 1,
        }
    },

    created() {
        this.hello();
    },

    methods: {
        hello() {
            console.log("hello from mixin", this.num)
        },

        func_mixin() {
            console.log('func from mixin')
        }
    }
}