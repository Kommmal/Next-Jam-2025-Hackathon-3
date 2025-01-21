// customer.js (Sanity schema)
export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'customerId',
      title: 'Customer ID',
      type: 'string',
      description: 'A unique identifier for the customer',
      validation: Rule => Rule.required().min(5).max(20),
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(15),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: Rule => Rule.required().min(10).max(200),
    },
    {
      name: 'loyaltyPoints',
      title: 'Loyalty Points',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'order' }],
        },
      ],
    },
    {
      name: 'newsletterSubscribed',
      title: 'Subscribed to Newsletter',
      type: 'boolean',
      initialValue: false,
    },
  ],
}
