import Toast from './Toast.svelte';

export const toast = (content: string, delay:number = 2000) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const t = new Toast({
      target: div,
      props: {
        content,
      }
    });

    setTimeout(() => {
      t.$destroy();
    }, delay)
};