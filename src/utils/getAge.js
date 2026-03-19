
export function getAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate;



  return age;
}



