function seoFriendlyURL(props) {
    const str = props.string.replace(" - ", '-v-').toLowerCase();
    return encodeURI(str.replace(/\s+/g, '-'));
}

export default seoFriendlyURL;