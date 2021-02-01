import { TileComponent } from '../../utils/tile/tile.component';

export default {
  title: 'Addon/TileComponent',
  component: TileComponent,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const modules = {
  provider: [TileComponent],
};

export const Basic = () => ({
  moduleMetadata: modules,
  template: '<div><h1>DocInjectable</h1></div>',
});
