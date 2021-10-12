export const getPublicResourceLink = (link) => `${process.env.REACT_APP_ENV === 'development' ? '/public' : ''}${link}`;

export default getPublicResourceLink;
