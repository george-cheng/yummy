import yumpopover from './yumpopover'

const YumPopover={
    install: function (Vue) {
        Vue.component(yumpopover.name, yumpopover)
    }
};

export default YumPopover;
