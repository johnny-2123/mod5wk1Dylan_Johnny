import { NavLink, useParams } from "react-router-dom";
function GalleryNavigation({ galleries }) {
    const { galleryId } = useParams();
    const navs = galleries.map(gallery => {
        return <div key={gallery.id}><NavLink to={`/galleries/${galleryId}`}>{gallery.name}</NavLink>
        </div>
    });

    return (

        <>
            <h1>gallery nav</h1>
            <nav>{navs}</nav>

        </>
    )

}

export default GalleryNavigation
