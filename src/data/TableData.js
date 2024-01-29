function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}
  
export const rows = [
  createData("Lasania Chicken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
  createData("Créme Brulé", 18908421, "2 March 2022", "Delivered"),
  createData("Sushi", 18908421, "2 March 2022", "Pending"),
  createData("Fried Chicken", 18908421, "2 March 2022", "Pending"),
  createData("Tartiflette", 18908421, "2 March 2022", "Delivered"),
];