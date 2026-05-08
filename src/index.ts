import { createPlugin, type ManicPlugin } from 'manicjs/config';

export interface PluginTemplateOptions {
  path?: string;
  message?: string;
}

/**
 * Fork-ready template plugin for Manic.
 */
export function pluginTemplate(
  options: PluginTemplateOptions = {}
): ManicPlugin {
  const path = options.path ?? '/template.txt';
  const message = options.message ?? 'Hello from plugin-template';

  return createPlugin({
    name: '@manicjs/plugin-template',
    staticFiles: [
      {
        path,
        content: message,
        contentType: 'text/plain; charset=utf-8',
      },
    ],
  });
}
