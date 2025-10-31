import {
  apply,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  Tree,
  url,
  template
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function component(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      }),
      move(`src/app/${_options.name}`)
    ]);

    return mergeWith(sourceParametrizedTemplates);
  };
}
