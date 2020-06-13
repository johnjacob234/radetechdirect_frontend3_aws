
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PackGrid from './Packing'
import clsx from 'clsx';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import StepLabel from '@material-ui/core/StepLabel';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import DeliveryGrid from './Delivery'

import CompletedGrid from './Completed'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Packing', 'Delivery', 'Completed'];
}

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient(90deg, rgba(32,135,105,1) 0%, rgba(255,165,0,1) 99%, rgba(252,176,69,1) 100%);',
    boxShadow: '0 4px 10px 0 rgb(32,135,105)',
  },
  completed: {
    backgroundImage:
      'linear-gradient(90deg, rgba(32,135,105,1) 0%, rgba(255,165,0,1) 99%, rgba(252,176,69,1) 100%);',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ArchiveOutlinedIcon />,
    2: < EmojiTransportationIcon/>,
    3: < CheckCircleOutlinedIcon/>,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

// ColorlibStepIcon.propTypes = {
//   active: PropTypes.bool,
//   completed: PropTypes.bool,
//   icon: PropTypes.node,
// };

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PackGrid/>;
    case 1:
      return <  DeliveryGrid/>;
    case 2:
      return < CompletedGrid/>;
    default:
      return 'Unknown step';
  }
}

export default function ProcessPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };



  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };



 

  const handleStep = (step) => () => {
    setActiveStep(step);
  };


  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
          
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
     
          </div>
        )}
      </div>
    </div>
  );
}
