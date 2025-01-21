  import axios from 'axios';
  import { client } from './sanityClient.js';

  async function uploadImageToSanity(imageUrl: string): Promise<string> {

    try {
      // Fetch the image from the URL and convert it to a buffer
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data);

      // Upload the image to Sanity
      const asset = await client.assets.upload('image', buffer, {
        filename: imageUrl.split('/').pop(), // Extract the filename from URL
      });

      // Debugging: Log the asset returned by Sanity
      console.log('Image uploaded successfully:', asset);

      return asset._id; // Return the uploaded image asset reference ID
    } catch (error) {
      console.error('❌ Failed to upload image:', imageUrl, error);
      throw error;
    }
  }

  async function importData() {
      try {
        // Fetch data from external API
        const response = await axios.get('https://template1-neon-nu.vercel.app/api/products');
        const products = response.data;

        // Iterate over the products
        for (const product of products) {
          let imageRef = '';

          // Upload image and get asset reference if it exists
          if (product.image) {
            imageRef = await uploadImageToSanity(product.image);
          }

          const sanityProduct = {
            _id: `product-${product.id}`, // Prefix the ID to ensure validity
            _type: 'products',
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageRef,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
        colors: product.colors,
        sizes: product.sizes
   
          };

          // Log the product before attempting to upload it to Sanity
          console.log('Uploading product:', sanityProduct);

          // Import data into Sanity
          await client.createOrReplace(sanityProduct);
          console.log(`✅ Imported product: ${sanityProduct.name}`);
        }

        console.log('✅ Data import completed!');
      } catch (error) {
        console.error('❌ Error importing data:', error);
      }
  }

  importData();