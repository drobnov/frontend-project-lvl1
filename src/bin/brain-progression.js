#!/usr/bin/env node

import {
  gameInstruction, functionTheTask, functionRightAnswer, verification,
} from '../games/games_brain-progression';
import { gameEngine } from '../index';

gameEngine(gameInstruction, functionTheTask, functionRightAnswer, verification);
