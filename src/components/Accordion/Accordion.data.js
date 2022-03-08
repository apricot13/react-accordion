export const accordionData = {
    sections: [
      {
        title: 'Tortor Magna',
        content: (
          <p>
            <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
      {
        title: 'Fusce Risus Malesuada',
        content: (
          <p>
            Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
          </p>
        ),
      },
    ],
  };


export const accordionDataReadMore = {
  withReadMore: true,
  sections: [
    {
      title: 'Tortor Magna',
      content: (
        <p>
          Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
    },
    {
      title: 'Fusce Risus Malesuada',
      content: (
        <p>
          Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
    },
  ],
};


export const accordionDataWithSummary = {
  sections: [
    {
      title: 'Tortor Magna',
      summary: 'Purus Tristique Sem Ornare Inceptos',
      content: (
        <p>
          <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
    },
    {
      title: 'Fusce Risus Malesuada',
      summary: 'Tortor Ultricies Nullam Malesuada Pellentesque',
      content: (
        <p>
          Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
    },
  ],
};


export const accordionDataExpanded = {
  sections: [
    {
      title: 'Tortor Magna',
      summary: 'Purus Tristique Sem Ornare Inceptos',
      content: (
        <p>
          <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
      isExpanded: true,
    },
    {
      title: 'Fusce Risus Malesuada',
      summary: 'Tortor Ultricies Nullam Malesuada Pellentesque',
      content: (
        <p>
          Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
    },
    {
      title: 'Tortor Magna',
      summary: 'Purus Tristique Sem Ornare Inceptos',
      content: (
        <p>
          <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
      isExpanded: false,
    },
    {
      title: 'Fusce Risus Malesuada',
      summary: 'Tortor Ultricies Nullam Malesuada Pellentesque',
      content: (
        <p>
          Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
      isExpanded: true,
    },
  ],
};



export const acordionDataWithComponents = {
  sections: [
    {
      title: 'Tortor Magna',
      summary: 'Purus Tristique Sem Ornare Inceptos',
      content: (
        <>
          <p>
            <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum. <>this is jsx</> Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra
            augue.
          </p>
        </>
      ),
      isExpanded: true,
    },
    {
      title: 'Fusce Risus Malesuada',
      summary: 'Tortor Ultricies Nullam Malesuada Pellentesque',
      content: (
        <p>
          Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
      isExpanded: true,
    },
  ],
};

export const acordionDataSingleAccordion = {
  sections: [
    {
      title: 'Tortor Magna',
      content: (
        <p>
          Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
    },
  ],
};

export const acordionDataLongTitleAccordion = {
  sections: [
    {
      title: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      content: (
        <p>
          dapibus ac facilisis in, <strong>egestas eget quam.</strong> Fusce dapibus, tellus
          ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus
          mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Etiam
          porta sem malesuada magna mollis euismod.
        </p>
      ),
    },
    {
      title: 'Tortor Magna',
      content: (
        <p>
          Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
    },
    {
      title: 'Fusce Risus Malesuada',
      content: (
        <p>
          Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
        </p>
      ),
    },
  ],
};
