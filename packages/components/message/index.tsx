import { message as BasicMessage } from 'antd';

type MessageType = 'success' | 'error' | 'warn' | 'info' | 'loading';

function createToast(type: MessageType) {
  return function toast(config: Record<string, any>) {
    let params: Record<string, any>;
    if (typeof config === 'string') {
      params = {
        content: config,
        duration: 2,
      };
    } else {
      params = { duration: 2, ...config };
    }
    return BasicMessage[type](params, { maxCount: 1 });
  };
}

export default {
  info: createToast('info'),
  loading: createToast('loading'),
  success: createToast('success'),
  error: createToast('error'),
  warn: createToast('warn'),
};
