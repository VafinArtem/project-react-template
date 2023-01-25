import React from 'react';
import { Props } from '@shared/ui/icon/props';

/**
 * Компонент для импорта свг
 * Пример импорта:
 * import { Icon, VariableIcon } from '@shared/ui';
 * Icon glyph={VariableIcon.id} viewBox={VariableIcon.viewBox} />
 */

const Icon = ({ glyph, viewBox, width, height, className }: Props): JSX.Element => {
  return (
		<svg className={className} width={width} height={height} viewBox={viewBox}>
			<use xlinkHref={`#${glyph}`} />
		</svg>
  );
};

export default Icon;
