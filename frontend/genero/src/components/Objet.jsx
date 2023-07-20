import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Dialog,
  Fade,
  Backdrop,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import "../styles/Objet.css";

const useStyles = makeStyles({
    userCard: {
      width: '270px',
      height: 'max-content',
      borderRadius: '10px',
      boxShadow: '5px 5px 30px black',
      margin: '10px',
      background: '-webkit-linear-gradient(to left, #f5b921, #f5b921)', /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to left, #f5b921, #f5b921)'
    },
    userCardTop: {
      height: '52%',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      overflow: 'hidden',
      textAlign: 'center'
    },
    userCardBottom: {
      color: 'white',
      minHeight: '40%',
      overflow: 'auto',
      minWidth: '100%',
      maxWidth: '100%',
      padding: '0 10px 5px',
      overflowWrap: 'break-word'
    },
    titre: {
      color: 'white',
    },
    Description: {
      color: 'white',
      fontSize: 18
    },
    categorie: {
        color: 'white',
        fontSize: 18
      },
      Disponibilites: {
        color: 'white',
        fontSize: 18
      },
      etat_objet: {
        color: 'white',
        fontSize: 18
      },
     
      adresse: {
        color: 'white',
        fontSize: 18
      },
      telephone: {
        color: 'white',
        fontSize: 18
      },
    avatar: {
      width: '200px',
      height: '200px',
      margin: '8px 0 0 0',
      border: '4px solid white',
      objectFit: 'cover'
    },
    box: {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    margin: {
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
   
    paper1: {
      minWidth: '500px',
      minHeight: '100px',
      padding: '20px'
    },
    btn: {
      minWidth: '100px',
    }
  });
 
 

  const Objet = ({ crud, getPaginatedData, handleDelete }) => {
    const [titre, setTitre] = React.useState('');
    const [Description, setDescription] = React.useState('');
    const [categorie, setCategorie] = React.useState('');
    const [Disponibilites, setDisponibilites] = React.useState('');
    const [etat_objet, setEtat_objet] = React.useState('');
    const [adresse, setAdresse] = React.useState('');
    const [telephone, setTelephone] = React.useState('');
    const [image, setImage] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    
    const classes = useStyles();
    const [avatarSize, setAvatarSize] = React.useState('small');
    
    
    
    
    
    const handleAvatarClick = () => {
      setAvatarSize(avatarSize === 'small' ? 'large' : 'small');
    };
    
    
    const handleClose = () => {
    setOpen(false);
    };
    
    const handleOpen = () => {
    setOpen(true);
    };
    
    const handleEdit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('_id', crud._id);
    formData.append('image', image);
    formData.append('titre', titre);
    formData.append('Description', Description);
    formData.append('categorie', categorie);
    formData.append('Disponibilites', Disponibilites);
    formData.append('etat_objet', etat_objet);
    formData.append('adresse', adresse);
    formData.append('telephone', telephone);
    
    const config = {
      method: 'put',
      url: 'http://localhost:8000/api/cruds/edit',
      headers: {
        "content-type": "application/json",
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };
    
    axios(config)
      .then((res) => {
        getPaginatedData();
      })
      .catch((error) => {
        console.log(error);
      });
    alert('Edited');
    handleClose();
    };
    
    React.useEffect(() => {
    if (crud) {
      setTitre(crud.titre || '');
      setDescription(crud.Description || '');
      setCategorie(crud.categorie || '');
      setDisponibilites(crud.Disponibilites || '');
      setEtat_objet(crud.etat_objet || '');
      setAdresse(crud.adresse || '');
      setTelephone(crud.telephone || '');
      setImage(crud.image || null);
    }
    }, [crud]);
    
    const getImageName = (url) => {
    if (crud && crud.image) {
      const imgUrl = url.split('\\');
      return imgUrl[imgUrl.length - 1];
    }
    return null;
    };
    
    return (
    <div style={{display:"flex", alignItem:"center", justifayContent:"space-between", flexWrap:"wrap" }}>
      {crud && (
        <Card className={classes.userCard}
        style={{
          width:avatarSize === 'large' && "650px",
          height:avatarSize === 'large' && "650px",

          
        }}
        
        >
        
          <CardContent>
            <Box className={classes.userCardTop}>
            <img
          alt="profileImg"
          src={`http://localhost:8000/uploads/${crud.image}`}
          className={`${classes.avatar} ${avatarSize === 'large' ? classes.largeAvatar : ''}`}
          style={{ width:avatarSize === 'large' ? "300px" :"300px" , height:avatarSize === 'large' &&"300px" , borderRadius:avatarSize === 'large' &&"none !important"}}
             onClick={handleAvatarClick}
    
    
        />
    
            </Box>
            <Box className={classes.userCardBottom}>
              <Typography variant="h5" className={classes.titre}>
                {crud.titre || ''}
              </Typography>
              <Typography variant="h6" className={classes.Description}>
              Description: {Description}
              </Typography>
              <Typography variant="h6" className={classes.categorie}>
              Categorie: {categorie}
              </Typography>
              <Typography variant="h6" className={classes.Disponibilites}>
              Disponibilites: {Disponibilites}
              </Typography>
              <Typography variant="h6" className={classes.etat_objet}>
              Etat_objet: {etat_objet}
              </Typography>
              <Typography variant="h6" className={classes.adresse}>
              Adresse: {adresse}
              </Typography>
              <Typography variant="h6" className={classes.telephone}>
              Telephone: {telephone}
              </Typography>
            </Box>
            <Box className={classes.box}>
              <Button
                className={classes.btn}
                style={{ backgroundColor: '#B58247', margin: '3px' }}
                variant="outlined"
                onClick={() => setOpenDeleteModal(true)}
              >
                Supprimer
              </Button>
             
              <Button
                className={classes.btn}
                style={{ backgroundColor: '#B58247', margin: '3px' }}
                variant="outlined"
                onClick={handleOpen}
              >
                Modifier
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    
      <Dialog
        classes={{ paper: classes.paper1 }}
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Typography>Confirmer l'opération</Typography>
        <Button
          onClick={() => handleDelete(crud && crud._id ? crud._id : '')}
          variant="contained"
         
          style={{ margin: '10px' ,backgroundColor: '#f5b921' }}
        >
          CONFIRMER
        </Button>
        <Button
          onClick={() => setOpenDeleteModal(false)}
          variant="contained"
         
          style={{ margin: '10px' ,backgroundColor: '#B58247' }}
        >
          FERMER
        </Button>
      </Dialog>
    
      <Dialog
        classes={{ paper: classes.paper }}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={handleEdit} className={classes.margin}>
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
                type="text"
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
                type="text"
                onChange={(e) => setCategorie(e.target.value)}
                variant="outlined"
                label="Categorie"
              />
            </Box>
            <Box className={classes.margin}>
              <TextField
                color="primary"
                name="Disponibilites"
                value={Disponibilites}
                type="text"
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
                type="text"
                onChange={(e) => setEtat_objet(e.target.value)}
                variant="outlined"
                label="Etat_objet"
              />
            </Box>
            <Box className={classes.margin}>
              <TextField
                color="primary"
                name="adresse"
                value={adresse}
                type="text"
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
                type="text"
                onChange={(e) => setTelephone(e.target.value)}
                variant="outlined"
                label="Telephone"
              />
            </Box>
            <Box className={classes.margin}>
              <input
                color="secondary"
                type="file"
                name="image"
                required
                onChange={(e) => setImage(e.target.files[0])}
                className={classes.fileInput}
              />
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'space-evenly', margin: 10 }}>
              <Button type="submit" variant="contained" style={{ backgroundColor: '#f5b921' }}>
                MODIFIER
              </Button>
              <Button onClick={handleClose} variant="contained" style={{ backgroundColor: '#B58247' }}>
                FERMER
              </Button>
            </Box>
          </form>
        </Fade>
      </Dialog>
    </div>
    );
    };
    
    export { Objet };