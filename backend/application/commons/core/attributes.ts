class Attributes {

  public static IsValid(value) {
    if (typeof (value) === 'string') {
      return value !== '' ? true : false;
    } else if (Array.isArray(value)) {
      return value.length > 0 ? true : false;
    }
    return !Attributes.isNullOrUndefined(value) ? true : false;
  }

  static ReturnIfValid = (value, defaultValue = undefined) => Attributes.IsValid(value) ? value : defaultValue;
  static isNullOrUndefined = (value: any) => (value === null || value === undefined);

  static encodeImage(value: any) {
    if (value.image) {
      value.image = value.image.toString('base64');
    }
    return value;
  }
}

export default Attributes;