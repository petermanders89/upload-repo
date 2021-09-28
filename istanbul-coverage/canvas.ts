import { IObjectState } from '../redux/types/canvas-types';

export const GRID_COLORS: { [objectType: string]: string } = {
  HORIZONTAL: '#fff',
  VERTICAL: '#58FF33'
};

export const OBJECT_STATE: IObjectState = {
  meta: {
    id: '',
    objectType: '',
    isDrawn: false,
    isDrawing: false
  },
  parameters: {},
  options: {}
};

export const MEASUREMENT_OFFSET = 12;
