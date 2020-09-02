import {mount} from '@vue/test-utils';
import MyButton from '../components/MyButton.vue';

describe('Mounted App', () => {
  const wrapper = mount(MyButton);

  test('is a Vue instance', () => {
    expect(wrapper.html()).toContain('What is the sum of the two numbers?');
  });
});
