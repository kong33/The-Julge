export default function validatePhoneNumber(phoneNumber: string) {
  const phoneRegex = /^(0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4]|70|80)|010|011)-?([1-9][0-9]{2,3})-?([0-9]{4})$/;

  const sanitizedNumber = phoneNumber.replace(/-/g, '');
  if (phoneRegex.test(sanitizedNumber)) {
    return true;
  }
  return false;
}
