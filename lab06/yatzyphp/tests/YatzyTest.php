<?php
namespace Yatzy\Test;

use PHPUnit\Framework\TestCase;

class YatzyTest extends TestCase
{

    function testYatzyGame()
    {
        $game = new YatzyGame();

        echo "Starting new game...\n";

        $game->rollAllDice();
        $firstRoll = $game->getDiceValues();
        echo "First roll: " . implode(", ", $firstRoll) . "\n";

        if (count($firstRoll) !== 5) {
            echo "Test failed: Incorrect number of dice rolled in the first roll.\n";
            return;
        }

        if ($game->canReroll()) {
            $game->rollSelectedDice([1, 3, 4]);
            $secondRoll = $game->getDiceValues();
            echo "Second roll: " . implode(", ", $secondRoll) . "\n";

            if (count($secondRoll) !== 5) {
                echo "Test failed: Incorrect number of dice after second roll.\n";
                return;
            }
        }

        if ($game->canReroll()) {
            $game->rollSelectedDice([0, 2]);
            $thirdRoll = $game->getDiceValues();
            echo "Third roll: " . implode(", ", $thirdRoll) . "\n";

            if (count($thirdRoll) !== 5) {
                echo "Test failed: Incorrect number of dice after third roll.\n";
                return;
            }
        }

        $totalScore = $game->calculateScore();
        echo "Total score: " . $totalScore . "\n";

        if ($game->getRollCount() !== 3) {
            echo "Test failed: Incorrect roll count.\n";
            return;
        }

        $game->resetGame();
        if ($game->getRollCount() !== 0 || array_sum($game->getDiceValues()) !== 0) {
            echo "Test failed: Game did not reset properly.\n";
            return;
        }

        echo "All tests passed!\n";
    }
}