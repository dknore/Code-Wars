function filter_list(l) {
    const result = l.filter(el => typeof (el) !== 'string');
    return result;
}