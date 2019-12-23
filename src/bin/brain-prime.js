#!/usr/bin/env node

import { gameEngine } from '../index';
import {
  gameInstruction, functionTheTask, functionRightAnswer, verification,
} from '../games/games_brain-prime';

gameEngine(gameInstruction, functionTheTask, functionRightAnswer, verification);
