<?php
include 'Dice.php';

class YatzyGame
{
    private $dice;
    private $currentRolls;
    private $maxRolls;
    private $diceValues;

    public function __construct()
    {
        $this->dice = [];
        for ($i = 0; $i < 5; $i++) {
            $this->dice[$i] = new Dice();
        }
        $this->currentRolls = 0;
        $this->maxRolls = 3;
        $this->diceValues = array_fill(0, 5, 0);
    }

    public function rollAllDice()
    {
        for ($i = 0; $i < 5; $i++) {
            $this->diceValues[$i] = $this->dice[$i]->roll();
        }
        $this->currentRolls++;
    }

    public function rollSelectedDice($selectedDice)
    {
        foreach ($selectedDice as $index) {
            if ($index >= 0 && $index < 5) {
                $this->diceValues[$index] = $this->dice[$index]->roll();
            }
        }
        $this->currentRolls++;
    }

    public function getDiceValues()
    {
        return $this->diceValues;
    }

    public function getRollCount()
    {
        return $this->currentRolls;
    }

    public function canReroll()
    {
        return $this->currentRolls < $this->maxRolls;
    }

    public function calculateScore()
    {
        return array_sum($this->diceValues);
    }

    public function resetGame()
    {
        $this->currentRolls = 0;
        $this->diceValues = array_fill(0, 5, 0);
    }
}