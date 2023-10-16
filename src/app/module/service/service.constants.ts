export const ServiceFilterableFields: string[] = [
  'name',
  'location',
  'category',
  'categoryId',
  'price',
  'rating',
  'description',
  'categoryId',
  'createdAt',
  'updatedAt',
  'category.name',
];

export const ServiceRelationalFields: string[] = ['categoryId'];
export const ServiceRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
