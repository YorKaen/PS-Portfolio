import Inputmask from 'inputmask';

export default {
    mounted(el, binding) {
        const phoneMask = new Inputmask(binding.value);
        phoneMask.mask(el);
    }
}