export const formatDate = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOCBER",
    "NOVEMBER",
    "DECEMBER"
  ];
  const month = date.getMonth();
  const year = date.getUTCFullYear();
  const day = date.getDate();
  return `${day} ${months[month]} ${year}`;
};

export const formatNRIC = nricFin => {
  if (!nricFin) return null;
  const arrayNric = nricFin.split(":");
  return arrayNric.length === 3 ? arrayNric[2] : null;
};

export const formatCertID = certId => {
  if (!certId) return null;
  const arrayCertId = certId.split(":");
  return arrayCertId.length > 0 ? arrayCertId[0] : null;
};
