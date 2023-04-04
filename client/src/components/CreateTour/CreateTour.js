import styles from './styles/createTour.module.css'

export const Create = () => {
    return(
        <>
            <div className={styles["create-whole"]}>
                <div className={styles["create-form-wrapper"]}>
                        <form className={styles["create-form"]}>
                            <h2>Tell us about your last trip</h2>
                            <label className={styles["destination-label"]} htmlFor="destination">Destination</label>
                            <input type="text" name="destination" id="destination" />

                            <label className={styles["imageUrl-label"]} for="imageUrl">Image Url</label>
                            <input type="url" name="imageUrl" id="imageUrl" />

                            <label className={styles["destination-label"]} htmlFor="description-label" >Description</label>
                            <textarea  name="description" col="2000" rows="5"></textarea>  
                        </form>  
                    <button className={styles["submit-button"]}>Submit</button>
                </div>
            </div>
        </>
        
    )
}