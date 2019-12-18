#!/usr/bin/env node

import {
  gameInstruction, functionTheTask, functionRightAnswer, verification,
} from '../games/games_brain-gcd';
import { gameEngine } from '../index';

gameEngine(gameInstruction, functionTheTask, functionRightAnswer, verification);
