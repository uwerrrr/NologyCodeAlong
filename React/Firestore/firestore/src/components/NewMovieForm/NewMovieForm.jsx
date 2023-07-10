import styles from './NewMovieForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { createMovie } from '../../services/movies-service';
import { useNavigate } from 'react-router-dom';

const NewMovieForm = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const formSubmit = (formData) => {
    createMovie(formData).then((movie) => {
      console.log(movie);
      navigate('/movies');
    });
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
      <div className={styles.field}>
        <label>Title</label>
        <input
          className={errors.title ? styles.erorr_input : ''}
          type='text'
          {...register('title')}
        />
        <div className={styles.error_container}>
          {errors.title && (
            <span className={styles.error_message}>{errors.title.message}</span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label>Year</label>
        <input
          className={errors.number ? styles.erorr_input : ''}
          type='number'
          {...register('year')}
        />
        <div className={styles.error_container}>
          {errors.year && (
            <span className={styles.error_message}>{errors.year.message}</span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label>Image</label>
        <input
          className={errors.image ? styles.erorr_input : ''}
          type='text'
          {...register('image')}
        />
        <div className={styles.error_container}>
          {errors.image && (
            <span className={styles.error_message}>{errors.image.message}</span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label>Director</label>
        <input
          className={errors.director ? styles.erorr_input : ''}
          type='text'
          {...register('director')}
        />
        <div className={styles.error_container}>
          {errors.director && (
            <span className={styles.error_message}>
              {errors.director.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <button>Create Movie</button>
      </div>
    </form>
  );
};

export default NewMovieForm;
