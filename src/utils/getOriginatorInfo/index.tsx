interface IGetOriginatorInfoProps {
  firstName: string;
  lastName: string;
  company: string;
}

export function getOriginatorInfo({
  firstName,
  lastName,
  company,
}: IGetOriginatorInfoProps): string {
  if (!firstName && !lastName && !company) {
    return "";
  }

  if (!firstName || !lastName) {
    return `${firstName || lastName}, ${company}`;
  }

  if (!company) {
    return `${firstName} ${lastName}`;
  }

  return `${firstName} ${lastName}, ${company}`;
}
