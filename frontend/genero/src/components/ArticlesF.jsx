import React, { useEffect } from 'react';
import axios from 'axios';
import "../styles/ArticlesF.css";
import  {Objet} from '../components/Objet';
import { Container, Grid, Button, Box, Dialog, Fade, Backdrop, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddButton } from '../components/AddButton';
import Pagination from '@material-ui/lab/Pagination';

let fs = require('fs');   

const useStyles = makeStyles ({
    gridContainer: {
      maxWidth: "80%",
      paddingLeft: '30px',
    },
    innerGrid: {
    },
    margin: {
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
   
    btn: {
        color: 'white',
        width: '80px',
        margin: '10px'
    }
    
  }); 

const ArticlesF = ({searchArticles}) => {
    const [ titre, setTitre ] = React.useState('');
    const [ Description, setDescription ] = React.useState('');
    const [ categorie, setCategorie ] = React.useState('');
    const [ Disponibilites, setDisponibilites ] = React.useState('');
    const [ etat_objet, setEtat_objet ] = React.useState('');
    const [ adresse, setAdresse ] = React.useState('');
    const [ telephone, setTelephone ] = React.useState('');
    const [ image, setImage ] = React.useState('');
    const [ crud, setCrud ] = React.useState([]);
    const [ loading, setLoading ] = React.useState( false );
    const [currPage, setCurrPage] = React.useState(1);
    const [next, setNext] = React.useState(false);
    const [previous, setPrevious] = React.useState(false);
    const [totalPages, setTotalPages] = React.useState(1)
    const [ open, setOpen ] = React.useState(false);

    let classes = useStyles();
    
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    
    const limit = 3;

    const getPaginatedData = () => {
        axios.get(`http://localhost:8000/api/cruds/?page=${currPage}&limit=${limit}`)
        .then((res) => {
            if( res.data.prev === undefined ) {
                setPrevious( true)
            }
            else {
                setPrevious( false )
            }
            if( res.data.next === undefined ) {
                setNext( true) 
            }
            else {
                setNext( false )
            }
            setTotalPages(res.data.totalPages)
            setCrud([...res.data.current])
            setLoading( false )
        })
        .catch((err) => {
            console.log(err)
        })
    }
 
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/cruds/${id}`)
             .then((res) => {
                 if( crud.length == 1 && currPage > 1 ) {
                     setCurrPage(prev => prev - 1 )
                 }
                setCrud([...res.data])
                setLoading( false )
             })
             .catch((error) => {
               console.log( error )
             })
        getPaginatedData()
        alert("Deleted Successfully")
      }
    


    // const handlePrevious = () => {
    //     setCurrPage(prev => prev - 1)
    // }

    // const handleNext = () => {
    //     setCurrPage(prev => prev + 1)
    // }
    useEffect(() => {
        if(searchArticles.length > 0) setCrud(searchArticles)
    })
    const handleAdd = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.get('titre');
        formData.get('Description');
        formData.get('categorie');
        formData.get('Disponibilites');
        formData.get('etat_objet');
        formData.get('adresse');
        formData.get('telephone');
        formData.append('image', image);
        if( !titre || !Description || !categorie ||!Disponibilites ||!etat_objet ||!adresse ||!telephone ||   !image  ) {
        return( alert("fill in alll details"))
        }
        let config = {
        method: "post",
        url: "http://localhost:8000/api/cruds/add",
        headers: {
           "content-type": "application/json",
           "content-type": "multipart/form-data"
        },
        data: formData,
    };
        axios(config)
            .then((res) => {
                setCrud([...res.data.reverse()])
                setLoading( false )
            })
            .catch((error) => {
                console.log( error.response )
            })
        alert("Nouveau objet/Article est ajouté bravo")
        getPaginatedData()
        handleClose()
    }

    React.useEffect(() => {
        getPaginatedData()
    },[currPage, open])

    return (
        <div className="App">
          <Container>
            <div style={{ margin: 'auto'}}>
              <AddButton handleOpen={handleOpen} />
           </div>
           {/* <div style={{marginLeft: "-17px"}}>
                <Button className={classes.btn} color="primary" variant="contained" onClick = { () => handlePrevious() } disabled={previous === true}  >PREVIOUS</Button>
                <Button className={classes.btn} color="secondary" variant="contained" onClick = { () => handleNext()} disabled={next === true} >NEXT</Button>
           </div> */}
          
            <Dialog
                classes={{ paper: classes.paper}}
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
                    >
                        <Fade in={open}>
                        <form className={classes.margin} onSubmit={handleAdd} method="post" encType="multipart/form-data" >
                            <Box className={classes.margin}>
                                <TextField
                                name="titre"
                                value={titre}
                                color="secondary"
                                type="text"
                                onChange={(e) => setTitre(e.target.value)}
                                variant="outlined"
                                label="Titre"
                                />
                            </Box>
                            <Box className={classes.margin}>
                                <TextField
                                color="primary"
                                name="Description"
                                value={Description}
                                type="Description"
                                onChange={(e) => setDescription(e.target.value)}
                                variant="outlined"
                                label="Description"
                                />
                            </Box>

                            <Box className={classes.margin}>
                                <TextField
                                color="primary"
                                name="categorie"
                                value={categorie}
                                type="categorie"
                                onChange={(e) => setCategorie(e.target.value)}
                                variant="outlined"
                                label="categorie"
                                />
                            </Box>

                            <Box className={classes.margin}>
                                <TextField
                                color="primary"
                                name="Disponibilites"
                                value={Disponibilites}
                                type="Disponibilites"
                                onChange={(e) => setDisponibilites(e.target.value)}
                                variant="outlined"
                                label="Disponibilites"
                                />
                            </Box>

                            <Box className={classes.margin}>
                                <TextField
                                color="primary"
                                name="etat_objet"
                                value={etat_objet}
                                type="etat_objet"
                                onChange={(e) => setEtat_objet(e.target.value)}
                                variant="outlined"
                                label="Etat de l'objet"
                                />
                            </Box>

                            <Box className={classes.margin}>
                                <TextField
                                color="primary"
                                name="adresse"
                                value={adresse}
                                type="adresse"
                                onChange={(e) => setAdresse(e.target.value)}
                                variant="outlined"
                                label="Adresse"
                                />
                            </Box>

                            <Box className={classes.margin}>
                                <TextField
                                color="primary"
                                name="telephone"
                                value={telephone}
                                type="telephone"
                                onChange={(e) => setTelephone(e.target.value)}
                                variant="outlined"
                                label="Téléphone"
                                />
                            </Box>
                           
                           
                        
                            <Box className={classes.margin}>
                                <input
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-00 file:text-amber-400 hover:file:bg-blue-100"
                                color="secondary"
                                type="file"
                                name="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                variant="outlined"
                                />
                            </Box>
                            <Box style={{display: "flex", justifyContent: "space-evenly", margin: 10}}>
                            <Button type="submit" variant="contained" style={{ backgroundColor: '#f5b921' }}>
                                AJOUTER UN OBJET
                            </Button>

                                <Button  onClick={handleClose} variant="contained" style={{ backgroundColor: '#B58247' }} >
                                    FERMER
                                </Button>
                            </Box>
                        </form>
                        </Fade>
                </Dialog>
          </Container>
          <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}> 
            <Grid  container spacing={2} className={classes.gridContainer}  >
                {
                    crud.map((crud) => {
                    return (
                            <Grid  item  xs={12}  sm={6} md={4} xl={3} className={classes.innerGrid} key = {crud.id} >
                                <Objet getPaginatedData={getPaginatedData} crud={crud} handleDelete={handleDelete} />
                            </Grid>
                    )
                    })
                }
            </Grid>
            
          </div>
          <br />
          <br />
          <div style={{display: 'flex', justifyContent: 'center'}} >
               <Pagination count={totalPages} variant="outlined" shape="rounded"  page={currPage} onChange={(e, p) => setCurrPage(p)}  />
           </div>
      </div>
    )
}

export default ArticlesF;