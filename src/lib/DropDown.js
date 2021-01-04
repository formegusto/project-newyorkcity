export const SideBarDropDown = (event) => {
    const SubNav = event.target.nextSibling;

    if(SubNav.style.display !== 'block') {
        SubNav.style.display = 'block';
    } else {
        SubNav.style.display = 'none';
    }
}