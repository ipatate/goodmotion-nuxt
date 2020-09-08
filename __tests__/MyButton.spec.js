import {mount} from '@vue/test-utils';
import MyButton from '../components/global/MyButton.vue';

describe('Mounted App', () => {
  const wrapper = mount(MyButton, {
    stubs: {
      NuxtLink: true,
    },
  });

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
