const primaryVariant = (variant = 500) => {
  switch (variant) {
    default:
      return '#6200EE';
  }
};

const secondaryVariant = (variant = 500) => {
  switch (variant) {
    default:
      return '#03DAC5';
  }
};

const onPrimaryVariant = (primaryVariant = 500) => {
  switch (primaryVariant) {
    default:
      return '#FFFFFF';
  }
};

const onSecondaryVariant = (secondaryVariant = 500) => {
  switch (secondaryVariant) {
    default:
      return '#000000';
  }
};

const createPalette = () => ({
  primary: primaryVariant(),
  secondary: secondaryVariant(),
  background: '#FFFFFF',
  surface: '#FFFFFF',
  error: '#B00020',
  onPrimary: onPrimaryVariant(),
  onSecondary: onSecondaryVariant(),
  onBackground: '#000000',
  onSurface: '#000000',
  onError: '#FFFFFF',
  primaryVariant,
  secondaryVariant,
  onPrimaryVariant,
  onSecondaryVariant,
});

export default createPalette();
