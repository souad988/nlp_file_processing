import { toast } from 'react-toastify';

const validateFileType = (file) => file.name.split('.').pop() !== 'pdf';

const validateFileSize = (file) => file.size > 3145728;

const validations = (file, setInputError) => {
  if (!file) {
    setInputError(true);
    toast.error('File Required: please select a file!');
    return false;
  }
  if (validateFileType(file)) {
    setInputError(true);
    toast.error('Only PDF files are allowed for the moment!');
    return false;
  }
  if (validateFileSize(file)) {
    setInputError(true);
    toast.error('File size must not be more than 3MB');
    return false;
  }
  return true;
};

export default validations;
