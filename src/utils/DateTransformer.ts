export class DateFormatter {
  public static formatStringToBrPattern(dateString: string) {
    const d = new Date(dateString);

    if (d.toUTCString() === 'Invalid Date') {
      throw Error('Date is invalid');
    }

    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }
}
