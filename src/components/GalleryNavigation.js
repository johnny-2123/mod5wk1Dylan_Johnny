import { NavLink, useParams } from "react-router-dom";
function GalleryNavigation({ galleries }) {
    const { galleryId } = useParams();
    const navs = galleries.map(gallery => {
        return <NavLink to={`/galleries/${galleryId}`}>{gallery.name}</NavLink>
    });

    return (

        <>
            <h1>gallery nav</h1>
            <NavLink>
                <nav>{navs}</nav>
            </NavLink>

        </>
    )

}

export default GalleryNavigation
