export type HomeProps = {
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
      };
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      about: {
        description: string;
        banner: {
          url: string;
          imgix_url: string;
        };
      };
      services: serviceProps[];
      contact: {
        email: string;
        phone: String;
        address: string;
        time: string;
      };
    };
  };
};

type serviceProps = {
  image: {
    url: string;
    imgix_url: string;
  };
  description: string;
};
